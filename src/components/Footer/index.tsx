import FooterProps from './Footer.props';

export default function Footer({ author, href, tag }: FooterProps) {
  return (
    <footer>
      {href.includes('freepik') ? (
        <a href={href}>
          {tag} photo created by {author} - www.freepik.com
        </a>
      ) : (
        <a href={href}>
          {tag} photos by {author}
        </a>
      )}
    </footer>
  );
}
