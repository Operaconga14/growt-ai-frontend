export interface Challenge {
    id: number;
    category: string;
    title: string;
    description: string;
    progress: number;
    challengeDays: number;
    daysLeft: number;
    streak: number;
}
