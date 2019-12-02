const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Jane Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'Ivan Petrov',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Moscow, Russia',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
]

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;
  
    document.getElementById('imageDisplay').innerHTML = `
      <div class="text-center">
        <img src='${currentProfile.image}'>
      </div>
    `
  } else {
    // No more profiles left - reload page  
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false} :
      { done: true }
    }
  };
}