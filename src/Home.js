import Template from './components/Template';

export default function Home() {
  const title = `Hi, I'm Daria`;
  const text = `... a develloper from berlin`;
  const img = './wood-wide-web.jpg';
  return <Template title={title} text={text} image={img} />;
}
