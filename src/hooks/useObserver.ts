import {useEffect, useRef, RefObject} from "react";

export const useObserver = (ref: any, canLoad: boolean, isLoading: any, callback: any) => {
    const observer = useRef<IntersectionObserver | null>();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        const cb = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}
