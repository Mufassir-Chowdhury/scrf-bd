export function load() {
    let papers = [
        {
            'title': 'Psychological disorders among college going students: A post Covid-19 insight from Bangladesh',
            'authors': 'Md Abu Bakkar Siddik, Akher Ali, Sumon Miah, Mahedi Hasan, Minhaz Ahmed, Tachlima Chowdhury Sunna',
            'published': 'January, 2024',
            'link': 'https://www.sciencedirect.com/science/article/pii/S2666915323002238',
            'doi': 'https://doi.org/10.1016/j.jadr.2023.100686',
        },
        {
            'title': 'Prevalence of depression and its associated factors among undergraduate admission candidates in Bangladesh: A nation-wide cross-sectional study',
            'authors': 'Md Abu Bakkar Siddik, Md Nafiul Hasan, Al Mahmud, Morioum Sarkar Munmun, Mahmudul Hasan Milad, Akher Ali, Zobayer Ahmed, Md Jamal Uddin',
            'published': 'November 30, 2023',
            'link': 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0295143',
            'doi': 'https://doi.org/10.1371/journal.pone.0295143',
        },
    ]
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
    blogs = blogs.slice(0, 2);
    return {
        props: {
            papers,
            blogs
        }
    }
}

