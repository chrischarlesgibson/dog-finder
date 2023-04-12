// GET /dogs/search
const searchDogs = (breeds, zipCodes, ageMin, ageMax, size, from, sort) => {
  const queryParams = new URLSearchParams({
    breeds: breeds,
    zipCodes: zipCodes,
    ageMin: ageMin,
    ageMax: ageMax,
    size: size || 25,
    from: from || undefined,
    sort: sort || undefined,
  });
  const url = `/dogs/search?${queryParams}`;
  return fetch(url, { credentials: "include" })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to search for dogs");
      }
      return res.json();
    })
    .then((data) => {
      return {
        resultIds: data.resultIds,
        total: data.total,
        next: data.next,
        prev: data.prev,
      };
    });
};

// POST /login
const login = (username, password) => {
  return fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to log in");
    }
  });
};

//logout
const logout = () => {
  return fetch("/auth/logout", {
    method: "POST",
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to log out");
    }
  });
};

//get all breeds
const getDogBreeds = () => {
  const url = "/dogs/breeds";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

// POST /locations
const addLocations = (zipCodes) => {
  return fetch("/locations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(zipCodes),
    credentials: "include",
  }).then((res) => res.json());
};

// POST /locations/search
const searchLocations = ({ city, states, geoBoundingBox, size, from }) => {
  const body = {};
  if (city) body.city = city;
  if (states) body.states = states;
  if (geoBoundingBox) body.geoBoundingBox = geoBoundingBox;
  if (size) body.size = size;
  if (from) body.from = from;
  return fetch("/locations/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to search locations");
      }
      return res.json();
    })
    .then(({ results, total }) => ({
      results,
      total,
    }));
};

// POST /dogs/match
const matchDog = (dogIds) => {
  return fetch("/dogs/match", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dogIds),
    credentials: "include",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to match dog");
      }
      return res.json();
    })
    .then((data) => {
      const { match } = data;
      if (!match) {
        throw new Error("No match found");
      }
      return match;
    });
};
