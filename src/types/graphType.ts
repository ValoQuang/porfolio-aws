import { LegacyRef } from "react";
import { User } from "../graphQL/query";

export interface SubmitProp {
  message: string;
  emoji: any;
  emojiHTML: any;
  indicatesLimitedAvailability: boolean;
  expiresAt: null;
}

export interface UserObjectProp {
  user: User;
}

export interface StatusModalProp {
  isOpen: boolean;
  onClose: () => void;
  fetchedStatus: SubmitProp | null;
}

export interface PersonalModalProp {
  data: User;
  onClose: () => void;
  refetch: () => void;
}

export interface GraphButtonProp {
  title: string;
  onClick: () => void;
}

export interface GraphInputProp {
  firstInputRef?: LegacyRef<HTMLInputElement> | undefined;
  label?: string;
  defaultValue: string;
  placeholder: string;
  onChange: (e: any) => void;
}
