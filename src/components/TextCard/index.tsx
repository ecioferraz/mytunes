import TextCardProps from './TextCard.props';

export default function TextCard({
  as: Tag = 'span',
  className,
  text,
}: TextCardProps) {
  return <Tag className={className}>{text}</Tag>;
}
