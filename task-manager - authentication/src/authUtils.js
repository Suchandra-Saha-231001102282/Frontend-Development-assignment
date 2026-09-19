export function generateFakeJWT(username) {
  const header = btoa(
    JSON.stringify({
      alg: "HS256",
      typ: "JWT",
    })
  );

  const payload = btoa(
    JSON.stringify({
      username,
      role: "student",
      issuedAt: Date.now(),
    })
  );

  const signature = btoa(
    `fake-signature-${username}-${Date.now()}`
  );

  return `${header}.${payload}.${signature}`;
}

export function getStoredUser() {
  const user = localStorage.getItem("taskUser");

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem("taskUser");
  localStorage.removeItem("jwtToken");
  sessionStorage.removeItem("taskAccess");
}