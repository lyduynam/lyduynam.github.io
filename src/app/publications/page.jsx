import PublicationComponent from "@/components/publication-component";
import { publications } from "@/data/publications";

const PublicationPage = () => {
    // Step 1: Sort descending by year
    const sortedPublications = [...publications].sort((a, b) => a.Year - b.Year);

    // Step 2: Group by year
    const publicationsByYear = sortedPublications.reduce((acc, pub) => {
        if (!acc[pub.Year]) {
            acc[pub.Year] = [];
        }
        acc[pub.Year].push(pub);
        return acc;
    }, {}) // Reverse to have the latest year first

    return (
            <div className="main-content">
                <p className="text-[1.5em] font-bold mb-[0.5em]">My Publications</p>
                {
                    Object.entries(publicationsByYear).reverse().map(([year, pubs]) => (
                        <div key={year} className="mb-[1em]">
                            <p className="text-[0.95em] font-semibold mb-[0.25em]">{year}</p>
                            {
                                pubs.map((publication, index) => (
                                    <PublicationComponent key={index} publication={publication} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
    );
};

export default PublicationPage;
