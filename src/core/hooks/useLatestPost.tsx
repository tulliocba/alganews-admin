import {useCallback, useState} from "react";
import {Post, PostService} from "cms-alganews-sdk";

export const useLatestPost = () => {
    const [posts, setPosts] = useState<Post.Paginated>();

    const fetchPosts = useCallback(() => {
        PostService.getAllPosts({
            sort: ['createdAt', 'desc'],
            page: 0,
            size: 3
        }).then(setPosts);
    }, [])

    return {
        posts: posts?.content,
        fetchPosts
    }
}