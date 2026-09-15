import { getYouTubeId } from "@/lib/youtube";
import Icon from "@/components/icon";
export default function YouTubeEmbed({ url, title, caption }) {
  const id = getYouTubeId(url);
  if (!id) return null;
  return <section className="detail-section" id="video">
    <div className="section-heading"><h2>Video</h2><a className="text-link" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">Watch on YouTube <Icon name="arrow-up-right" size={15} /></a></div>
    <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={`${title} — project video`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
    {caption && <p className="figure-caption">{caption}</p>}
  </section>;
}
