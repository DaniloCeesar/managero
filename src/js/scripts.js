function app() {
    return {
        // Frontend vars
        modalTaskDelete: false,
        modalTaskEdit: false,
        currentTaskId: null,

        // Database
        users: [
            {
                id: "92aa-40fc-a42a-5a731d878d7c",
                username: "danilo",

                first_name: "Danilo",
                full_name: "Danilo César",
                avatar: "https://i.pravatar.cc/48?u=92aa-40fc-a42a-5a731d878d7c"
            },
            {
                id: "b1fe97a5-d443-4e0d-86ab-912051025719",
                username: "jane",

                first_name: "Jane",
                full_name: "Jane Doe",
                avatar: "https://i.pravatar.cc/48?u=b1fe97a5-d443-4e0d-86ab-912051025719"
            },
            {
                id: "e7915b7c-ea15-4bd9-a018-935e7b0ebbde",
                username: "john",

                first_name: "John",
                full_name: "John Doe",
                avatar: "https://i.pravatar.cc/48?u=2ce122a3-63cc-44cc-afe3-4987b8c2618b"
            }
        ],
        
        lists: [
            {
                id: "ea4838a2-90a9-4160-a374-2fe9e0236f94",
                title: "application's landing page",

                icon: "cloud",

                background: "bg-blue-100",
                foreground: "text-blue-800"
            },
            {
                id: "69205156-4213-4009-82fa-cd01c0a356b4",
                title: "server planning",

                icon: "server",

                background: "bg-purple-100",
                foreground: "text-purple-800"
            },
            {
                id: "78dcda9b-bb2a-4f18-a2c6-2e9c8384ae7e",
                title: "Checklist for the first app release",

                icon: "cube",

                background: "bg-orange-100",
                foreground: "text-orange-800",

                is_favorite: true
            },
        ],

        defaultTasks: [
            {
                id: "d1bc6cfc-cf02-4453-b508-fa89d041d2e6",
                title: "My first task",

                description: "",
                
                status: 0, // `0|open|in-progress, 1|done, 2|not-complete`
                pinned: false,

                comments: [
                    {
                        id: "3bd1a91f-31b0-4eaa-85e4-7f8751e29729",
                        title: "First comment",
                        content: "Here goes my first comment.",

                        author: "danilo",
                        created_date: "2022-03-09T07:35:16Z",
                        modified_date: "2022-03-09T07:35:16Z"
                    }
                ],
                files: [
                    {
                        id: "3bd1a91f-31b0-4eaa-85e4-7f8751e29729",
                        title: "Google link",
                        external_link: "http://google.com/",

                        author: "john",
                        created_date: "2022-03-09T07:35:16Z",
                        modified_date: "2022-03-09T07:35:16Z"
                    }
                ],

                assignees: [
                    "danilo"
                ],
                lists: [
                    "ea4838a2-90a9-4160-a374-2fe9e0236f94",
                    "69205156-4213-4009-82fa-cd01c0a356b4"
                ],

                // Integration: FullCalendar
                start: '2022-03-12T14:30:00',
                end: '',
                // extendedProps: {
                // },
                backgroundColor: 'blue',
                borderColor: 'blue',

                created_date: "2022-03-09T07:35:16Z",
                modified_date: "2022-03-09T07:35:16Z"
            },
            {
                id: "553a5f05-2f88-4cfd-a4c7-b818ce83a24e",
                title: "Second task, by another users",

                description: "",
                
                status: 1,
                pinned: true,

                comments: [],
                files: [],

                assignees: [
                    "john",
                    "jane"
                ],
                lists: [
                    "78dcda9b-bb2a-4f18-a2c6-2e9c8384ae7e"
                ],

                // Integration: FullCalendar
                start: '2022-03-13T07:00:00',
                end: '',
                backgroundColor: 'green',
                borderColor: 'green',

                created_date: "2022-03-09T07:35:16Z",
                modified_date: "2022-03-09T07:35:16Z"
            }
        ],

        i18n: {
            status: {
                0: {
                    id: "0",
                    title: "In progress",
                    class: "text-orange-800 bg-orange-100"
                },
                1: {
                    id: "1",
                    title: "Done",
                    class: "text-green-800 bg-green-100"
                },
                2: {
                    id: "2",
                    title: "Almost done",
                    class: "text-blue-800 bg-blue-100"
                },
            },
        },

        get_user( userUsername ) {
            return this.users.find(function(item) {
                return item.username == userUsername;
            });
        },

        get_list( listId ) {
            return this.lists.find(function(item) {
                return item.id == listId;
            });
        },

        get_task( taskId ) {
            if ( taskId == undefined ) { return false; }

            // return this.tasks.filter(function(item) {})[0];
            return this.tasks.find(function(item) {
                return item.id == taskId;
            });
        },

        get_task_lists( taskId ) {
            let currentTask = this.get_task( taskId );
            if ( typeof currentTask === 'undefined' ) { return []; }

            let currentTaskListsObject = [];

            currentTask.lists.forEach(listId => {
                if ( typeof this.get_list( listId ) === 'undefined' ) return; // If not found, skip iteration

                currentTaskListsObject.push(
                    this.get_list( listId )
                );
            });

            return currentTaskListsObject;
        },
        
        get_task_assignees( taskId ) {
            let currentTask = this.get_task( taskId );
            // console.info( currentTask, (typeof currentTask === 'undefined') );
            if ( typeof currentTask === 'undefined' ) { return []; }

            let currentTaskAssigneesObject = [];

            currentTask.assignees.forEach(userUsername => {
                if ( typeof this.get_user( userUsername ) === 'undefined' ) return; // If not found, skip iteration

                currentTaskAssigneesObject.push(
                    this.get_user( userUsername )
                );
            });

            return currentTaskAssigneesObject;
        },

        get_task_status( taskId ) {
            let currentTask = this.get_task( taskId );
            if ( typeof currentTask === 'undefined' ) { return []; }
            
            // return statusArray[ currentTask.status ];
            return this.i18n.status[ currentTask.status ];
        },

        // get_task_events() {
        //     return tasks;
        // },

        create_task( prefilled = {} ) {
            let newTask = {
                id: crypto.randomUUID(),
                title: "New task",

                description: "",
                
                status: 0,
                pinned: false,

                comments: [],
                files: [],

                assignees: [
                    ( prefilled.assignees != undefined ) ? prefilled.assignees : ""
                ],
                lists: [
                    ( prefilled.folders != undefined ) ? prefilled.folders : ""
                ],

                // Integration: FullCalendar
                start: '',
                end: '',
                backgroundColor: 'gray',
                borderColor: 'gray',

                created_date: Date.now(),
                modified_date: Date.now()
            }
            
            this.tasks = [].concat(newTask, this.tasks);

            return newTask.id;
        },

        delete_task( taskId ) {
            this.tasks = this.tasks.filter(m => m.id !== taskId);
            this.currentTaskId = null;
        },

        init() {
            this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            // console.info( this.tasks );

            if ( this.tasks == null || this.tasks.length === 0 ) {
                this.tasks = this.defaultTasks;
            }
        }
    }
}