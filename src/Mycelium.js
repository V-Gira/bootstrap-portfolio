import Template from './components/Template';

export default function Mycelium() {
  const title = `title for Mycelium`;
  const text = `... text for Mycelium`;
  const img = './wood-wide-web.jpg';

  return <Template title={title} text={text} image={img} />;
}
