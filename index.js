            //update user.....done
            function updatenamebyid(){
                var useridtoupdate = document.getElementById('disuseridtwo').value;
                var newupname = document.getElementById('updateusername').value; //name
                var newuptrip = document.getElementById('updateusertrips').value;  //trip
                var newupairid = document.getElementById('updateuserairlineid').value;  //airplane id

                $.ajax({
                    url:"https://api.instantwebtools.net/v1/passenger/"+useridtoupdate,
                    type:"put",
                    data:{
                        name: newupname,
                        trips: newuptrip,
                        airline: newupairid,
                    },
                    success:function(response){
                        alert("user details updated successfully")
                    }
                })
            }

            //update 2 ...get on edit button click
            function getvaluetoupdate(useridedittwo){

                $.ajax({
                    url:"https://api.instantwebtools.net/v1/passenger/"+useridedittwo,
                    type:"get",

                    success:function(response){
                        
                        document.getElementById('disuseridtwo').value = response._id;
                        document.getElementById('updateusername').value = response.name;
                        document.getElementById('updateusertrips').value = response.trips;
                        document.getElementById('updateuserairlineid').value = response.airline[0].id;
                        
                    }
                })
            }

            //create user....ok
            function passcreate(){
                var username = document.getElementById('username').value;
                var tripno = document.getElementById('tripno').value;
                var airlineid = document.getElementById('airlineid').value;
                //var tripnonew = parseInt(tripno);

                $.ajax({
                    url:"https://api.instantwebtools.net/v1/passenger",
                    type:"post",
                    data:{
                        name: username,
                        trips: tripno,
                        airline: airlineid,
                    },
                    success:function(response){
                        alert("user created successfully");
                    }
                })
            }

            //passanger search by id.....ok
            function searchbyid(){
                var userid = document.getElementById('searchbyname').value;

                $.ajax({
                    url:"https://api.instantwebtools.net/v1/passenger/"+userid,
                    type:"get",

                    success:function(response){
                        //alert(response.name);
                        $('#disairplaneid').append("ID:- "+response._id);
                        $('#disname').append("Name :- "+response.name);
                        $('#distrip').append("Total Trips:- "+response.trips);
                        $('#disairplane').append("Airplane name :- "+response.airline[0].name);
                        $('#dislogos').append("<img src="+ response.airline[0].logo +" alt='error'/>");
                        
                        //$('ul').append("<li>"+"Name:" +response.name + " ,Total trips: " +response.trips +"</li>");
                    }
                })
            }
            
            //delete user.....ok
            function passdelete(passid){
                $.ajax({
                    url: "https://api.instantwebtools.net/v1/passenger/"+passid,
                    type: "Delete",

                    success:function(response){
                        alert("user deleted successfully");
                        window.location.reload();
                    }
                })
            }
            
            //all passanger data ....ok
            function passangerlist(){
                $.ajax({
                    url:"https://api.instantwebtools.net/v1/passenger",
                    type:"get",
                    success:function(response){

                        for (var i = 0; i < 200; i++) { 

    $('table').append("<tr><td>"+ response.data[i]._id + "</td><td>"+ response.data[i].name + "</td><td>"+ response.data[i].trips + "</td><td>"+ response.data[i].airline[0].id +"</td><td>"+ response.data[i].airline[0].name +"</td><td><img src=" + response.data[i].airline[0].logo +" alt='error'/></td><td>"+ response.data[i].airline[0].country +"</td><td>"+ response.data[i].airline[0].established +"</td><td><button id='btn1' onclick=getvaluetoupdate('"+response.data[i]._id + "')>Edit</button><button id='btn2' onclick=passdelete('"+response.data[i]._id+"')>Delete</button></td></tr>");
            
                        }
                    }
                });
            }
        