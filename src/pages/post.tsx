import Layout from "src/components/Layout";
import { useRouter } from "next/router";
import { posts } from "src/profile";

interface PostProps {
    title: string;
    footer: boolean;
}

const Post = () => {
    const router = useRouter();

    const currentPost = posts.find(
        (post) => post.title === router.query.title
    );

    if (!currentPost) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }


    return (
        <Layout title={router.query.title as string} footer={false}>
            <div className="text-center">
                <img
                    src={currentPost.imageURL}
                    alt=""
                    style={{ width: "50%" }}
                    className="img-fluid"
                />
                <p className="p-4">{currentPost.content}</p>
            </div>
        </Layout>
    );
};

export default Post;