import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import CoreCompetencies from './_components/CoreCompetencies';
import CTASection from './_components/CTASection';
import ProjectList from './_components/ProjectList';
export default function Home() {
    return (<div className="page-">
            <Banner />
            <AboutMe />
            <CoreCompetencies />
            <ProjectList />
            <CTASection />
        </div>);
}
