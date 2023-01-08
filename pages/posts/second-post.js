import Link from 'next/link';
import Layout from '../../components/layout';

export default function SecondPost() {
    return (
        <Layout>
            <h1> Second post</h1>

            <Link href="/">Home</Link>

        </Layout>
    );
}