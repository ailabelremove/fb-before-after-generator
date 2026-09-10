"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { TemplateState, CardStats } from "./types";
import { defaultTemplate } from "./defaultTemplate";

type TemplateContextType = {
  template: TemplateState;
  setField: <K extends keyof TemplateState>(key: K, value: TemplateState[K]) => void;
  setCardStat: (side: "left" | "right", field: keyof CardStats, value: string) => void;
  resetTemplate: () => void;
};

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const [template, setTemplate] = useState<TemplateState>(defaultTemplate);

  const setField = <K extends keyof TemplateState>(key: K, value: TemplateState[K]) => {
    setTemplate((prev) => ({ ...prev, [key]: value }));
  };

  const setCardStat = (side: "left" | "right", field: keyof CardStats, value: string) => {
    setTemplate((prev) => ({
      ...prev,
      [side]: { ...prev[side], [field]: value },
    }));
  };

  const resetTemplate = () => {
    setTemplate(defaultTemplate);
  };

  return (
    <TemplateContext.Provider value={{ template, setField, setCardStat, resetTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
    }
