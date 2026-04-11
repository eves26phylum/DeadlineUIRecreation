import { useEffect } from '@rbxts/react';
import {CollectionService} from "@rbxts/services";
export default function useTags(instanceRef: React.RefObject<Instance | undefined>, tags: string[]) {
    useEffect(() => {
        const instance = instanceRef.current;
        if (!instance || tags.size() === 0) return;
        for (const tag of tags) CollectionService.AddTag(instance, tag);
        return () => {
            if (!instance) return;
            for (const tag of tags) CollectionService.RemoveTag(instance, tag);
        };
    }, [tags.join(",")]);
}