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
    return {
        props: {
            papers
        }
    }
}

