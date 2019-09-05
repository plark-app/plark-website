export type UserFeedback = {
    rate: number;
    user: string;
    feedback: string;
};

const userFeedbacks: UserFeedback[]
    = require('resources/feedbacks.json');

export default userFeedbacks;
