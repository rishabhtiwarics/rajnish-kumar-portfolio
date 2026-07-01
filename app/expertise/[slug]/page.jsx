import { notFound } from 'next/navigation';
import { EXPERTISE_ITEMS, getExpertiseBySlug } from '@/lib/expertise';
import ExpertiseDetailClient from './ExpertiseDetailClient';

export const generateStaticParams = async () => {
    return EXPERTISE_ITEMS.map((item) => ({ slug: item.slug }));
};

export const generateMetadata = async ({ params }) => {
    const { slug } = await params;
    const item = getExpertiseBySlug(slug);

    if (!item) {
        return {
            title: 'Expertise - Rajnish Kumar',
        };
    }

    return {
        title: `${item.title} - Rajnish Kumar | Launchveda`,
        description: item.summary,
    };
};

const ExpertiseDetailPage = async ({ params }) => {
    const { slug } = await params;
    const item = getExpertiseBySlug(slug);

    if (!item) notFound();

    return <ExpertiseDetailClient item={item} />;
};

export default ExpertiseDetailPage;