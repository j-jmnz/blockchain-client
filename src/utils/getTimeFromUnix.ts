import moment from 'moment';

const getTimeFromUnix = (unix: number | undefined): string | 0 | undefined => {
    return unix && moment.unix(unix).fromNow();
};

export default getTimeFromUnix;
