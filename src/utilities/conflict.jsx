export const timeConflict = (a, b) => {
    // console.log(a, b);
    if (a == b) return false;
    if (a.term !== b.term) return false;

    const meetA = a.meets;
    const meetB = b.meets;

    const daysA =  meetA.split(' ')[0].split('');
    const timeA = meetA.split(' ')[1].split('-').map(x => x.split(':'));
    const daysB =  meetB.split(' ')[0].split('');
    const timeB = meetB.split(' ')[1].split('-').map(x => x.split(':'));
    // console.log(daysA, timeA, daysB, timeB);
    if (daysA.filter(x => daysB.indexOf(x) !== -1).length == 0) return false;
    
    const startA = parseInt(timeA[0][0]) + parseInt(timeA[0][1]/60);
    const endA = parseInt(timeA[0][0]) + parseInt(timeA[0][1]/60);
    const startB = parseInt(timeB[0][0]) + parseInt(timeB[0][1]/60);
    const endB = parseInt(timeB[0][0]) + parseInt(timeB[0][1]/60);
    
    if (startA > endB || startB > endA) return false;

    return true;
}
