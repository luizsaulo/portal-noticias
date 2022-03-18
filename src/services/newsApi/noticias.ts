import { newsApi } from "./config";

export const getTopHeadLines = async () => {

    try {
        const response = await newsApi.get('/top-headlines?country=br&category=sports');

        return response.data;

    } catch (error) {
        return {
            message: 'Erro ao tentar consumir api.',
        };
    }
};

