export function formatTimestamp(timestamp){
    const date = new Date(timestamp);
    return date.toLocaleDateString(date) + ' at ' + date.toLocaleTimeString();
}