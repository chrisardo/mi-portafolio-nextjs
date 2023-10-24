import Link from "next/link";
import Layout from "src/components/Layout";
import { posts } from "src/profile";
import Image from "next/image";

interface Post {
    title: string;
    content: string;
    imageURL: string;
}

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
    <div className="col-md-4 py-2">
        <div className="card h-100">
            <div className="overflow">
                <img src={post.imageURL} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                    <button className="btn btn-outline-primary">Read</button>
                </Link>
            </div>
        </div>
    </div>
);

export default function Blog() {
    return (
        <Layout title="">
            <section>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-dark">
                            <div className="row">
                                <div className="col-md-12 my-2">
                                    <h1 className="text-center text-light">Blog</h1>
                                </div>
                                {posts.map((post, index) => (
                                    <PostCard key={index} post={post} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}