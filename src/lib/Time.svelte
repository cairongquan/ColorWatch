<script>
  import { timeValue } from "../store/index";
  import dayjs from "dayjs";
</script>

<div class="time">
  {dayjs($timeValue.timerInfo).format("HH:mm") ||
    dayjs(new Date()).format("HH:mm")}
</div>

<style>
  .time {
    user-select: none;
    color: #888;
    font-weight: 800;
    font-size: 22px;
  }
</style>
