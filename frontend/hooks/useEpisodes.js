import useFetch from 'use-http';

function useEpisodes(showId) {
    console.log(showId);
    const { loading, error, data } = useFetch(`/api/episodes/${showId}`, {}, [showId]);

    return { loading, error, data };
}

export default useEpisodes;
