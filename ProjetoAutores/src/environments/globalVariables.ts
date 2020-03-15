import { environment } from './environment';

const baseUrl: string = environment.endPointAPI;
export const Global = Object.freeze({
    BaseUrl: baseUrl + "api/"
});
