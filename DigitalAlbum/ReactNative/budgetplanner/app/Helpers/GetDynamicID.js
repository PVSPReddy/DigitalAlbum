export const setTimeTicksAsID = () => {
    const todayDate = new Date();  // for example
    // the number of .net ticks at the unix epoch
    const epochTicks = 621355968000000000;
    // there are 10000 .net ticks per millisecond
    const ticksPerMillisecond = 10000;
    // calculate the total number of .net ticks for your date
    const todayDateTicks = epochTicks + (todayDate.getTime() * ticksPerMillisecond);

    return todayDateTicks;
}