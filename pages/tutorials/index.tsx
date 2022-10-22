/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import Head from "next/head";
import Page from "../../components/page";

type Props = {
  tutorials: [];
};

const TutorialsPage = (props: Props) => {
  return (
    <Page>
      <Head>
        <title>PyPackage 0.0.2 - Tutorials</title>
      </Head>
      <main className="md:px-32 px-16 pt-4">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0660597578690897"
          crossOrigin="anonymous"
        ></Script>
        <h1 className="text-3xl font-bold text-center mt-12">Tutorials</h1>
        <p className="text-center mb-8"></p>
        <section className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full mt-4">
          {props.tutorials.map(({ name, description, path, image }, i) => (
            <div className="card glass" key={i}>
              <a href={path} className="card-content no-underline">
                <figure>
                  <img alt={name} src={image} />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    </Page>
  );
};

export async function getStaticProps() {
  const tutorials = [
    {
      name: "Masonite Modules",
      description: "Modularize your masonite project.",
      url: "https://github.com/py-package/masonite-modules",
      image:
        "https://camo.githubusercontent.com/e31fbf44997ed18b17603b34e2b8108da3b111ca28daf324af9295104152a650/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304d6f64756c65732e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6d6f64756c6573267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4d6f64756c6172697a652b796f75722b6d61736f6e6974652b6170706c69636174696f6e2e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
      path: "/tutorials/masonite-modules",
    },
    {
      name: "Masonite Backup",
      description: "Backup Solution for Masonite.",
      url: "https://github.com/py-package/masonite-backup",
      image:
        "https://camo.githubusercontent.com/ea4fe06aa2aacb87542458c812ba14e86e6328a350967873231d080fc88f7936/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304261636b75702e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6261636b7570267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4261636b75702b736f6c7574696f6e2b666f722b4d61736f6e6974652b417070732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
      path: "/tutorials/masonite-backup",
    },
    {
      name: "Masonite Audit",
      description: "Keep track of all your model changes with ease.",
      url: "https://github.com/py-package/masonite-audit",
      image:
        "https://camo.githubusercontent.com/81a18146450541e3b1d5290053baad395a4cd10a815c2bbd92e9db35de3c98ca/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746525323041756469742e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6175646974267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4b6565702b747261636b2b6f662b616c6c2b796f75722b6d6f64656c2b6368616e6765732b776974682b656173652e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
      path: "/tutorials/masonite-audit",
    },
    {
      name: "Masonite Permission",
      description: "Associate users with roles and permissions.",
      url: "https://github.com/py-package/masonite-permission",
      image:
        "https://camo.githubusercontent.com/c9c0ade51fe4bb986318107a8ea28d6bb184a916f6a43446f86e6597a431f23b/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532305065726d697373696f6e2e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d7065726d697373696f6e267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4173736f63696174652b75736572732b776974682b726f6c65732b616e642b7065726d697373696f6e732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
      path: "/tutorials/masonite-permission",
    },
  ];
  return {
    props: {
      tutorials,
    },
  };
}

export default TutorialsPage;
