angular.module('jobhelper.services', [])

.factory('formsFactory', [
  function () {
    var tasks = {
      todos: [
        { task: 'todo1', job: 'xyz', status: 'not complete', company: 'Mattermark' },
        { task: 'todo2', job: 'xyz', status: 'not complete', company: 'Mattermark' },
        { task: 'todo3', job: 'xyz', status: 'not complete', company: 'Whistle' },
        { task: 'todo4', job: 'xyz', status: 'not complete', company: 'Whistle' },
        { task: 'todo5', job: 'xyz', status: 'not complete', company: 'Angel.co' },
        { task: 'todo6', job: 'xyz', status: 'not complete', company: 'Angel.co' },
      ],
    };

    var jobs = {
      jobs: [
        {
          company: 'Mattermark',
          title: 'software engineer',
          description: 'You will build the world',
          link: 'mattermark.io',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '50',
          funding: 'A',
        },
        {
          company: 'Whistle',
          title: 'frontend engineer',
          description: 'Work with dogs!',
          link: 'whistle.com',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '30',
          funding: 'B',
        },
        {
          company: 'Angel.co',
          title: 'fullstack enginner',
          description: 'You will build the world',
          link: 'angel.co',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '100',
          funding: 'C',
        },
      ],
    };

    return {
      tasks: tasks,
      jobs: jobs,
    };
  },
])

.factory('getJobsFactory', [
  function () {
    // var getTasks = function () {
    //   return
    // }
    var tasks = {
      tasks: [
        { task: 'todo1', job: 'xyz', status: 'not complete', company: 'Mattermark' },
        { task: 'todo2', job: 'xyz', status: 'not complete', company: 'Mattermark' },
        { task: 'todo3', job: 'xyz', status: 'not complete', company: 'Whistle' },
        { task: 'todo4', job: 'xyz', status: 'not complete', company: 'Whistle' },
        { task: 'todo5', job: 'xyz', status: 'not complete', company: 'Angel.co' },
        { task: 'todo6', job: 'xyz', status: 'not complete', company: 'Angel.co' },
      ],
    };

    var jobs = {
      jobs: [
        {
          company: 'Mattermark',
          title: 'software engineer',
          description: 'You will build the world',
          link: 'mattermark.io',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '50',
          funding: 'A',
        },
        {
          company: 'Whistle',
          title: 'frontend engineer',
          description: 'Work with dogs!',
          link: 'whistle.com',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '30',
          funding: 'B',
        },
        {
          company: 'Angel.co',
          title: 'fullstack enginner',
          description: 'You will build the world',
          link: 'angel.co',
          phone: '123-456-7890',
          email: 'test@example.com',
          size: '100',
          funding: 'C',
        },
      ],
    };

    return {
      tasks: tasks,
      jobs: jobs,
    }
  },
]);