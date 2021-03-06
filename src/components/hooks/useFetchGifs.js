import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGift';

export const UsefetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
                
            })

    }, [category])



    return state;

}