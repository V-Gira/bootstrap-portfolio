import Template from './components/Template';

export default function Roots() {
  const title = `title for Roots`;
  const text = `... text for Roots`;
  const img = './wood-wide-web.jpg';

  return <Template title={title} text={text} image={img} />;
}
