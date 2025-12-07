/*
 * Created on Tue Dec 02 2025
 *
 * Copyright (c) 2025 Your Company
 */

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

