export const createLog = log => (
    $.ajax({
        method: 'POST',
        url: 'api/logs',
        data: { log }
    })
);

export const deleteLog = logId => (
    $.ajax({
        method: 'DELETE',
        url: `api/logs/${logId}`
    })
);