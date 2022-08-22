export const findLog = (logs, film_id, user_id) => {
    for (let id in logs) {
        let log = logs[id];
        if(
            log.film_id === film_id && 
            log.user_id === user_id
        ){
            return log;
        }
    }
    return false;
}