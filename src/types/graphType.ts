import { User } from "../graphQL/query";

export type SubmitProp = {
    message: string;
    emoji: any;
    emojiHTML: any;
    indicatesLimitedAvailability: boolean;
    expiresAt: null;
  };
  

export type UserObjectProp = {
    user: User;
  }

  export type StatusModal = {
    isOpen: boolean; 
    onClose: () => void; 
    fetchedStatus: SubmitProp | null;
  }