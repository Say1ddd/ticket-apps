function useTicket() {
    while(true){
        const nama = prompt("Masukkan nama:");
        if (nama === null || nama === "") break;

        const umur = prompt("Masukkan umur:");
        if (umur === null || umur === "") break;

        if (umur > 13){
            const studio = prompt("Pilih studio: \n[A] Studio A \n[B] Studio B \n[C] Studio C");
            if (studio === null || studio === "") break;

            const upperStudio = studio.toUpperCase();
            if (upperStudio === "A"){
                alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
            } else if (upperStudio === "B"){
                alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
            } else if (upperStudio === "C"){
                alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
            } else {
                alert("tidak boleh masuk studio");
            }
        } else {
            alert("tidak boleh masuk studio");
        }
    }
}