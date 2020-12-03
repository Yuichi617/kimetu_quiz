import Link from "next/link";
import Layout from '../components/Layout';

export default () =>(
    <Layout>
    <div className="main-screen">
        <div className="text1">このクイズであなたの鬼滅力を試すことができます。</div>
        <Link href="/question">
            <div className="start_btn">スタート</div>
        </Link>
    </div>

    </Layout>
);