pipeline {
    
    agent any

    stages {
        stage("build") {
             monitoring (
                    '''
                    [
                        {
                            // Minimal usage of one portlet 
                            "id": "first-demo-portlet"
                        }, 
                        {   
                            // Feel free to customize the portlets
                            "id": "another-portlet-id",
                            "width": 200,
                            "height": 100,
                            "color": "#FF5733"
                        }
                    ]
                    '''
            )
            steps {
                echo 'building app'
                echo 'Added portlet'
            }
        }
        stage("test") {
            steps {
                echo 'test app'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying app'
            }
        }
    }

}