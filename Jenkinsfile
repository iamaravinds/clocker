pipeline {
    
    agent any

    stages {
        stage("build") {
            steps {
                echo 'building app'
                echo 'Added portlet'
            }
        }
        stage("monitor") {
            monitoring(
                    '''
                    [
                        {
                            "id": "first-demo-portlet"
                        }, 
                        {   
                            "id": "second-demo-portlet	",
                            "width": 200,
                            "height": 100,
                            "color": "#FF5733"
                        }
                    ]
                    '''
            )
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