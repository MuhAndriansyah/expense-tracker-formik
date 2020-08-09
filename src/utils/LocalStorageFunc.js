export const getDataFromLocalStorage = key => {

  const value = localStorage.getItem(key)

  let expenseTrackerData = null;

  try {
    const parsed = JSON.parse(value)

    if (Array.isArray(parsed)) {
      expenseTrackerData = parsed
    }
  } catch (error) {
    expenseTrackerData = []
  }

  return expenseTrackerData;
}

export const saveDataToLocalStorage = (key, data) => { localStorage.setItem(key, JSON.stringify(data)) }