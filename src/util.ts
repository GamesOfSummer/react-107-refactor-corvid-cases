
import { DateTime } from "luxon";

export function fn(value: number): string { return (value).toLocaleString() };

export function fd(value: string): string {
    return (DateTime.fromFormat(value, 'yyyy-MM-dd HH:mm:ss')
        .toFormat('LLL dd, hh:mm:ss'));
};


