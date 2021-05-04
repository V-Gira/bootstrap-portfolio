import Template from './components/Template';

export default function Growth() {
  const title = `title for Growth`;
  const text = `... text for Growth`;
  const img = './wood-wide-web.jpg';

  return <Template title={title} text={text} image={img} />;
}
