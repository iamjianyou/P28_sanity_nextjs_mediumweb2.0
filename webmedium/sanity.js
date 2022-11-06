import {createImageUrlBuilder,
        createCurrentUserHook,
        createClient,
        imageUrlBuilder,    
} from "next-sanity";


export const config = {

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'production',
    dataset: process.env.NEXT_SANITY_DATASET,
    apiVersion: '2021-08-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,


    useCdn: proccess.env.NODE_ENV === 'production',

}

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);

export const useCurrentUser = createCurrentUserHook(config)