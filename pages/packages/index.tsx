/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import Head from "next/head";
import Page from "../../components/page";

type Props = {
  packages: [];
};

const PackagesPage = (props: Props) => {
  return (
    <Page>
      <Head>
        <title>PyPackage 0.0.2 - Packages</title>
      </Head>
      <main className="md:px-32 px-16 pt-4">
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0660597578690897"
          crossOrigin="anonymous"
        ></Script>
        <h1 className="text-3xl font-bold text-center mt-12">Packages</h1>
        <p className="text-center mb-8">
          Followings are some packages published and are ready to use. There are
          more packages coming on the way. Enjoy using the framework{" "}
          <a
            href="https://docs.masoniteproject.com/"
            rel="noreferrer"
            target="_blank"
            className="text-red-600 font-semibold"
          >
            Masonite<sup>4.0</sup>
          </a>
        </p>
        <section className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full mt-4">
          {props.packages.map(({ name, description, url, image }, i) => (
            <div className="card glass" key={i}>
              <a href={url} className="card-content no-underline">
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
  const packages = [
    {
      name: "Masonite Localization",
      description: "Add multi-language support in your application.",
      url: "https://github.com/py-package/masonite-localization",
      image:
        "https://camo.githubusercontent.com/bc1f810268fafd470ab2c585551232348ad8bf4c74efc18c53ac0191f60e6bd5/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304c6f63616c697a6174696f6e2e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6c6f63616c697a6174696f6e267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4164642b6c6f63616c652b737570706f72742b696e2b796f75722b6170706c69636174696f6e2e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Commerce (WIP)",
      description: "Full-fledge e-commerce solution in masonite",
      url: "https://github.com/py-package/masonite-commerce",
      image:
        "https://camo.githubusercontent.com/83afb75e94204eca00567f6525c84539da19f8912389ef47c7260c3465ba4a1c/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746520436f6d6d657263652e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d636f6d6d65726365267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d46756c6c2d666c656467652b652d636f6d6d657263652b736f6c7574696f6e2b696e2b4d61736f6e6974652b4672616d65776f726b2e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Filemanager (WIP)",
      description: "File management solution for your masonite application.",
      url: "https://github.com/py-package/masonite-filemanager",
      image:
        "https://camo.githubusercontent.com/29a099e0420d9c289ab3e4729d9a8465324aa3a1da0dbfa1d56927d7da9356c6/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746525323046696c656d616e616765722e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d66696c656d616e61676572267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d46696c652b6d616e6167656d656e742b736f6c7574696f6e2b666f722b4d61736f6e697465266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Minio Driver",
      description: "Minio Storage Driver for Masonite.",
      url: "https://github.com/py-package/minio-masonite-driver",
      image:
        "https://banners.beyondco.de/Masonite%20Minio%20Driver.png?theme=light&packageManager=pip+install&packageName=minio-driver&pattern=charlieBrown&style=style_2&description=Minio+Storage+Driver+for+Masonite.&md=1&showWatermark=1&fontSize=100px&images=adjustments&widths=50&heights=50",
    },
    {
      name: "Masonite Modules",
      description: "Modularize your masonite project.",
      url: "https://github.com/py-package/masonite-modules",
      image:
        "https://camo.githubusercontent.com/e31fbf44997ed18b17603b34e2b8108da3b111ca28daf324af9295104152a650/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304d6f64756c65732e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6d6f64756c6573267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4d6f64756c6172697a652b796f75722b6d61736f6e6974652b6170706c69636174696f6e2e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Backup",
      description: "Backup Solution for Masonite.",
      url: "https://github.com/py-package/masonite-backup",
      image:
        "https://camo.githubusercontent.com/ea4fe06aa2aacb87542458c812ba14e86e6328a350967873231d080fc88f7936/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304261636b75702e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6261636b7570267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4261636b75702b736f6c7574696f6e2b666f722b4d61736f6e6974652b417070732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Multitenancy",
      description: "Multitenancy package for Masonite.",
      url: "https://github.com/py-package/masonite-multitenancy",
      image:
        "https://camo.githubusercontent.com/f6f1c28c9e91b80070ded694b7052f382c34f82c9d308ed12e3adb6ba640222e/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532304d756c746974656e616e63792e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6d756c746974656e616e6379267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4d756c746974656e616e63792b7061636b6167652b666f722b6d61736f6e6974652e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Audit",
      description: "Keep track of all your model changes with ease.",
      url: "https://github.com/py-package/masonite-audit",
      image:
        "https://camo.githubusercontent.com/81a18146450541e3b1d5290053baad395a4cd10a815c2bbd92e9db35de3c98ca/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746525323041756469742e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d6175646974267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4b6565702b747261636b2b6f662b616c6c2b796f75722b6d6f64656c2b6368616e6765732b776974682b656173652e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Permission",
      description: "Associate users with roles and permissions.",
      url: "https://github.com/py-package/masonite-permission",
      image:
        "https://camo.githubusercontent.com/c9c0ade51fe4bb986318107a8ea28d6bb184a916f6a43446f86e6597a431f23b/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e6974652532305065726d697373696f6e2e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d7065726d697373696f6e267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d4173736f63696174652b75736572732b776974682b726f6c65732b616e642b7065726d697373696f6e732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Instant Article",
      description: "Generate facebooks instant articles and feeds.",
      url: "https://github.com/py-package/masonite-instant-articles",
      image:
        "https://camo.githubusercontent.com/25f792e409c2014664d8c600e70d9fe827ce5eb6a4246a044683edeeab1f7801/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e697465253230496e7374616e7425323041727469636c652e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d696e7374616e742d61727469636c65267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d67656e657261746525323066616365626f6f6b73253230696e7374616e7425323061727469636c6573253230616e6425323066656564732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Security",
      description: "Secure app by adding an extra layer of security.",
      url: "https://github.com/py-package/masonite-security",
      image:
        "https://camo.githubusercontent.com/8ed261f773667edfe00ce0193661700373320d8ce1f837fd6eecf816e79e7e29/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746525323053656375726974792e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d7365637572697479267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d5365637572652b6d61736f6e6974652b617070732b66726f6d2b7370616d6d696e672b426f74732c2b495027732b616e642b53514c2b696e6a656374696f6e732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
    {
      name: "Masonite Sentry",
      description: "Sentry SDK implementation for Masonite Apps.",
      url: "https://github.com/py-package/masonite-sentry",
      image:
        "https://camo.githubusercontent.com/2b7bdcfbd731fb03095d427aa22ed82c75c28d482ac83817111351fc6a8c2d22/68747470733a2f2f62616e6e6572732e6265796f6e64636f2e64652f4d61736f6e69746525323053656e7472792e706e673f7468656d653d6c69676874267061636b6167654d616e616765723d7069702b696e7374616c6c267061636b6167654e616d653d6d61736f6e6974652d73656e747279267061747465726e3d636861726c696542726f776e267374796c653d7374796c655f32266465736372697074696f6e3d53656e7472792b73646b2b696d706c656d656e746174696f6e2b666f722b4d61736f6e6974652b417070732e266d643d312673686f7757617465726d61726b3d3126666f6e7453697a653d313030707826696d616765733d61646a7573746d656e7473267769647468733d353026686569676874733d3530",
    },
  ];
  return {
    props: {
      packages,
    },
  };
}

export default PackagesPage;
