export function load(){
    let blogs = [
        {
            title: "Title of the article",
            author: "Author of the article",
            date: "December 19, 2023",
            image: "https://i0.wp.com/ummatics.org/wp-content/uploads/2023/11/feature-image-1.png?fit=494%2C426&ssl=1",
            slug: "title-of-the-article"
        },
        {
            title: "Title of the long long long article",
            author: "Author of the article",
            date: "December 19, 2023",
            image: "https://i0.wp.com/ummatics.org/wp-content/uploads/2023/08/AdobeStock_417378240-scaled-1.jpeg?fit=2560%2C1709&ssl=1",
            slug: "title-of-the-long-long-long-article"
        },
        {
            title: "This is a very long title. Please do not read the whole thing. It will be a waste of time.",
            author: "Author of the article",
            date: "December 19, 2023",
            image: "https://i0.wp.com/ummatics.org/wp-content/uploads/2023/08/AdobeStock_545613109-scaled-1.jpeg?fit=2560%2C1707&ssl=1",
            slug: "this-is-a-very-long-title-please-do-not-read-the-whole-thing-it-will-be-a-waste-of-time"
        }
    ]
    return {
        props: {
            blogs
        }
    }
}