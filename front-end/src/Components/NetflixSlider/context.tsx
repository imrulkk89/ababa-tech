import React from 'react';

interface IMovie{
    id: number,
    image: string,
    imageBg: string,
    title: string,
    description: string
}


interface ISlides{
    onSelectSlide: Function,
    onCloseSlide: Function,
    elementRef: React.RefObject<HTMLDivElement>,
    currentSlide: IMovie | null,
}

const SliderContext = React.createContext<ISlides>({} as ISlides);

export default SliderContext;
