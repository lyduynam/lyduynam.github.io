"use client";
import { useState } from "react";
import { faFilePdf, faFileVideo, faFilm, faPhotoFilm, faPhotoVideo, faVideo, faVideoCamera, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicationComponent = ({ publication }) => {
    const [showBibtex, setShowBibtex] = useState(false);

    const isMine = (authorName) => {
        return authorName.toLowerCase().includes("duy-nam ly") || authorName.toLowerCase().includes("ly, duy-nam");
    };

    return (
        <div className="publication-component top-border-line pt-[0.75em] pb-[0.75em] md:pt-[1em] md:pb-[1em]">
            <a target="_blank" rel="noopener noreferrer" href={publication.Link} className="block">
                <p className="text-[1.2em] sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] font-bold leading-tight mb-2">{publication.Title}</p>
                <div className="text-sm sm:text-base mb-2">
                    {
                        publication.Authors.map((author, index) => (
                            <span key={index}>
                                <span
                                    className="author"
                                    style={{
                                        textDecoration: isMine(author) ? 'underline' : 'none',
                                        fontWeight: isMine(author) ? 'bold' : 'normal'
                                    }}
                                >
                                    {author}
                                </span>
                                <span>{index < publication.Authors.length - 1 ? ', ' : ''}</span>
                            </span>
                        ))
                    }
                </div>
                <p className="italic text-sm sm:text-base">
                    {publication.Publication} - <span className="font-bold">{publication.Venue}</span>
                </p>
            </a>

            <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 mt-3">
                {
                    publication.PDF && <a href={publication.PDF} target="_blank" rel="noopener noreferrer" title="View PDF" className="hover:opacity-70 transition-opacity">
                        <FontAwesomeIcon icon={faFilePdf} size="lg" className="sm:text-xl md:text-2xl" />
                    </a>
                }

                {
                    publication.Demo && <a href={publication.Demo} target="_blank" rel="noopener noreferrer" title="Watch Demo" className="hover:opacity-70 transition-opacity">
                        <FontAwesomeIcon icon={faPhotoVideo} size="lg" className="sm:text-xl md:text-2xl" />
                    </a>
                }
                <button
                    onClick={() => setShowBibtex(!showBibtex)}
                    className="text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded cursor-pointer transition-colors"
                >
                    {showBibtex ? "Hide BibTeX" : "BibTeX"}
                </button>
            </div>

            {showBibtex && (
                <pre className="bg-gray-100 text-xs sm:text-sm p-2 sm:p-3 mt-3 rounded overflow-x-auto whitespace-pre-wrap break-words">
                    {publication.BibTex}
                </pre>
            )}
        </div>
    );
};

export default PublicationComponent;
