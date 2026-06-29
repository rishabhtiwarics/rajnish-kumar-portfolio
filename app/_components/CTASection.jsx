import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO } from '@/lib/data';

const CTASection = () => {
    return (
        <section className="py-16" id="brand-cta">
            <div className="container">
                <div className="mx-auto max-w-[760px] text-center">
                    <SectionTitle
                        title="Build with strategy, systems & execution"
                        className="mb-5 justify-center"
                        classNames={{
                            title: 'text-sm font-semibold tracking-[0.18em] text-primary sm:text-base',
                        }}
                    />
                    <h2 className="font-anton text-[42px] leading-[.95] text-foreground sm:text-[64px] lg:text-[76px]">
                        Ready To Build Your Brand?
                    </h2>
                    <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-foreground/70 sm:text-lg">
                        Move from product idea to a scalable brand with a launch partner built for execution.
                    </p>
                </div>

                <div
                    className="relative mt-10 flex items-center justify-center overflow-hidden rounded-[28px] bg-cover bg-center px-5 py-7 shadow-[0_24px_70px_rgba(35,35,55,0.14)] sm:py-8"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=85')",
                    }}
                >
                    <div className="absolute inset-0 bg-white/45 backdrop-saturate-150"></div>
                    <div className="relative z-[1] flex flex-wrap items-center justify-center gap-4 ">
                        <Button
                            as="link"
                            href={GENERAL_INFO.upworkProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            className="text-white shadow-[0_12px_28px_rgba(124,58,237,0.28)] hover:text-foreground"
                        >
                            Book Consultation
                        </Button>
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="light"
                            className="bg-white text-foreground shadow-[0_12px_28px_rgba(35,35,55,0.14)] hover:text-primary"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
